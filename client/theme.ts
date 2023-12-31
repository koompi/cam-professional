// export const names = ["store-123"] as const;
// export type ValidName = (typeof names)[number];

export const readTheme = async () => {
  let theme_json = (await import(`./themes/store-${import.meta.env.VITE_VARIABLE_ID_STORE}.json`).then(
    (module) => module.default
  )) as any;
  

  return (key: string, params?: { [key: string]: string | number }) => {
    let theme = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], theme_json);
    if (!theme) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        theme = theme!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return theme;
  };
};
