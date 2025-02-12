import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import RussianPage from "../RussianPage";
import { I18nextProvider } from "react-i18next";
import i18n from "../../setupTests";

describe("RussianPage", () => {
  it("renders Hello World in Russian", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RussianPage />
      </I18nextProvider>
    );

    expect(screen.getByText("Привет Мир")).toBeInTheDocument();
  });

  it("changes language to Russian on mount", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RussianPage />
      </I18nextProvider>
    );

    expect(i18n.language).toBe("ru");
  });
});
