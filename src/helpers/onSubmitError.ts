const onSubmitError = (errors: unknown): void => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(errors);
  }
};

export default onSubmitError;
