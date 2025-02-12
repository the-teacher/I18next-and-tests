import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import EnglishPage from "../EnglishPage";
import { I18nextProvider } from "react-i18next";
import i18n from "../../setupTests";

describe("EnglishPage", () => {
  it("renders Hello World in English", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <EnglishPage />
      </I18nextProvider>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("changes language to English on mount", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <EnglishPage />
      </I18nextProvider>
    );

    expect(i18n.language).toBe("en");
  });
});
