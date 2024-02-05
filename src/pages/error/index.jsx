import React, { useState } from 'react';
import { useRouteError } from "react-router-dom";
import { Trans } from 'react-i18next';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1> <Trans i18nKey="error.title">
        Oops!
      </Trans>  </h1>
      <p>
        <Trans i18nKey="error.description">
          Sorry, an unexpected error has occurred.
        </Trans>
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
