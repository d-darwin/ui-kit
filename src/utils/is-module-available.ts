// TODO: add more accurate typing for modulePath
export default function isModuleAvailable(modulePath: string): boolean {
  try {
    require.resolve(modulePath);
    return true;
  } catch {
    return false;
  }
}
