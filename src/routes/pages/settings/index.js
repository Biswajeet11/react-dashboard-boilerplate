import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { loadLiterals } from "../../../store/actions/language-action";
import { LOCALES } from "../../../localization/i8n";
import "./style.scss";

function Settings({ loadLiterals, language }) {
  return (
    <div>
      <h1>Settings</h1>
      <p>
        <FormattedMessage id="loremipsum" />
      </p>
      <div className="wrapper-button">
        <Button
          className="button-comp"
          onClick={() => {
            loadLiterals(LOCALES.ENGLISH);
          }}
        >
          English
        </Button>
        <Button
          className="button-comp"
          onClick={() => {
            loadLiterals(LOCALES.GERMAN);
          }}
        >
          German
        </Button>
        <Button
          className="button-comp"
          onClick={() => {
            loadLiterals(LOCALES.FRENCH);
          }}
        >
          French
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadLiterals: (language) => dispatch(loadLiterals(language)),
  };
};

const mapStateToProps = (state) => state.language;

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
