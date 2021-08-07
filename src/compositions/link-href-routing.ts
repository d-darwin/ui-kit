import { ref, onMounted, onUnmounted, nextTick, Ref } from "vue";
import { isModuleAvailable } from "@/utils";
import { VUE_ROUTER_MODULE_PATH } from "@/constants";

// TODO: add more clear return type
export default function useLinkHrefRouting() {
  const links: Ref<string[]> = ref([]);
  const router: VueRouter = {};

  function addLinkClickListeners(): void {}

  onMounted(() => {
    // TODO: what if module is available but not imported to the project???
    if (isModuleAvailable("vue-router")) {
    }
  });

  return {};
}
