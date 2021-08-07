import { defineComponent, nextTick } from "vue";
import { isModuleAvailable } from "@/utils";

const VUE_ROUTER_MODULE_PATH = "vue-router";

/**
 * If children of a component contains relative HTML links the mixins treats them as routes.
 */
export default defineComponent({
  data() {
    return {
      links: [] as HTMLAnchorElement[],
      // TODO: can I do this and not rewrite actual this.$router ???
      $router: {} as {
        push: (route: string) => void;
      },
    };
  },

  mounted(): void {
    if (this.hasRouter) {
      this.addListeners();
    }
  },

  beforeUnmount(): void {
    if (this.hasRouter) {
      this.removeListeners();
    }
  },

  async updated(): Promise<void> {
    if (isModuleAvailable(VUE_ROUTER_MODULE_PATH)) {
      this.removeListeners();
      await nextTick(this.addListeners);
    }
  },

  computed: {
    hasRouter(): boolean {
      return isModuleAvailable(VUE_ROUTER_MODULE_PATH) && Boolean(this.$router);
    },
  },

  methods: {
    /**
     * Prevents default browser behavior (page reload) for relative links.
     */
    navigate(event: MouseEvent): void {
      const targetElement = event.target as HTMLAnchorElement;
      if (targetElement) {
        const href = targetElement.getAttribute("href");
        const target = targetElement.getAttribute("target");

        if (href && href[0] === "/" && target !== "_blank") {
          event.preventDefault();
          this.$router.push(href);
        }
      }
    },

    addListeners(): void {
      this.links = this.$el.getElementsByTagName("a");
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener("click", this.navigate, false);
      }
    },

    removeListeners(): void {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].removeEventListener("click", this.navigate, false);
      }
      this.links = [];
    },
  },
});
