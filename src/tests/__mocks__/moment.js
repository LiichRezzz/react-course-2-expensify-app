// import Moment from 'moment'; - ne stava, shte dade bezkraen cikul i shtebugne kompa
// za tova trqbva da izpolzvame tova dolu

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};