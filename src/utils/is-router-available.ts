export default function isRouterAvailable(): boolean {
  try {
    require.resolve("vue-router");
    return true;
  } catch {
    return false;
  }
}
