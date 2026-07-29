// This SPA has no platform-resource or service dependencies,
// so window._env_ carries no required keys. The check below
// ensures /env-config.js was loaded correctly by the platform.

type Env = Record<string, never>;

declare global {
  interface Window {
    _env_: Env;
  }
}

if (!window._env_) {
  throw new Error(
    "window._env_ not set — /env-config.js failed to load. " +
      "The platform mounts this file via ReleaseBinding; if you see " +
      "this locally, host /env-config.js from your dev server.",
  );
}

export const env: Env = window._env_;
