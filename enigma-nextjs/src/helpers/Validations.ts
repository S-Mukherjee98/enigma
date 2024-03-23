export const getAntdFieldRequiredRules = (message: string) => {
  return [
    {
      required: true,
      message,
    },
  ];
};
