import CSS_CLASS from '../constants/cssClass';
import getContent from '../getContent';
import ICON from '../constants/icon';

export default function () {
    let self = this;
    let options = self.options;
    let btnSave = $(`<a href="javascript:void(0);" title="${options.locale.save}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.SAVE}</a>`);
    btnSave.on('click', function (e) {
        e.preventDefault();
        
        let content = getContent.call(self);
        
        typeof options.onSave === 'function' && options.onSave.call(self, content);
    });
    
    self.topbarRight.append(btnSave);
};
