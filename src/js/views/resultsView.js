import icons from '../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `bla bla bla nie znalezlismy recepty na query`;
  _message = ``;

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join(``);
  }
}

export default new ResultsView();
