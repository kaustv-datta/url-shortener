import { connect } from 'react-redux';

import URLList from '../../components/URLList';
import { actions } from '../../reducers';
import { copyToClipboard, relativeTime } from '../../modules/utilities';

const mapStateToProps = state => ({
  // format url list from state and convert to array
  list: Object.keys(state.urlList)
    .map((shortcode) => {
      const urlItem = Object.assign({}, state.urlList[shortcode]);
      urlItem.shortcode = shortcode;

      if (urlItem.lastVisit === undefined) {
        urlItem.lastVisit = 'NA';
      } else {
        urlItem.lastVisit = relativeTime(urlItem.lastVisit);
      }

      return urlItem;
    })
    .sort((a, b) => b.startDate - a.startDate),
  activeShortcode: state.currentShortCode,
  appState: state.appStatus,
});

const mapDispatchToProps = dispatch => ({
  onClearClick: () => {
    dispatch(actions.clearHistory());
    dispatch(actions.setEmptyState());
  },
  onCellClick: (shortcode, shorturl) => {
    dispatch(actions.setActiveShortcode(shortcode));
    copyToClipboard(shorturl);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(URLList);
