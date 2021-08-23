import React from 'react';

class FormScript extends React.Component{
    componentDidMount() {
        const { forms = [] } = this.props;
        console.log(forms)
        window.erxesSettings = {
         forms: [],
       };
     
       for (const form of forms) {
         window.erxesSettings.forms.push({ brand_id: form.brand_id, form_id: form.form_id });
        }
        
        (() => {
        const script = document.createElement('script');
        script.src = 'https://w.office.erxes.io/build/messengerWidget.bundle.js';
        script.async = true;
        script.key=Math.random().toString()
        const entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);
        })();
   }
}

export default FormScript