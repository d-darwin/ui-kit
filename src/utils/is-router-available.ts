export default function isRouterAvailable(packageName = "vue-router"): boolean {
  try {
    require.resolve(packageName);
    return true;
  } catch {
    return false;
  }
}
