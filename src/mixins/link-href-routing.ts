import { defineComponent, nextTick } from "vue";
import { isRouterAvailable, consoleLog, LOG_LEVEL } from "@/utils";
import { VueRouter } from "@/types";

/**
 * If children of a component contains relative HTML links the mixins treats them as routes.
 */
export default defineComponent({
  data() {
    return {
      links: [] as HTMLAnchorElement[],
      // just a mock for ts
      $router: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        push: () => {},
      } as VueRouter,
    };
  },

  mounted(): void {
    if (isRouterAvailable()) {
      this.addListeners();
    }
  },

  beforeUnmount(): void {
    if (isRouterAvailable()) {
      this.removeListeners();
    }
  },

  async updated(): Promise<void> {
    if (isRouterAvailable()) {
      this.removeListeners();
      await nextTick(this.addListeners);
    }
  },

  methods: {
    /**
     * Prevents default browser behavior (page reload) for relative links.
     */
    async navigate(event: MouseEvent): Promise<void> {
      const targetElement = event.target as HTMLAnchorElement;
      if (targetElement) {
        const href = targetElement.getAttribute("href");
        const target = targetElement.getAttribute("target");

        if (href && href[0] === "/" && target !== "_blank") {
          event.preventDefault();
          try {
            await this.$router.push(href);
          } catch {
            consoleLog(
              `Can't navigate to href '${href}'. Module vue-router is installed but not consumed by vue`,
              LOG_LEVEL.error
            );
          }
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
