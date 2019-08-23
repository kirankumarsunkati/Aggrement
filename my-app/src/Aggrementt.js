import React from 'react';
import CAHeader from './CAHeader.js';
import CAHeaderWithParagraph from './CAHeaderWithParagraph.js';
import CAHeaderSummary from './CAHeaderSummary.js';
import CAFotterToday from './CAFotterToday.js';
import CAFotterButtons from './CAFotterButtons.js';
class Aggrement extends React.Component{
  navigateToNewUser = () => {

  }
  submitForm = () => {

  }

render(){

    return (
      <div className="MainWrapper">
        <CAHeader Text="Customer Agreement" showCloseIcon = {'true'} showBackArrow = {'true'} showPipe = {'true'}/>
        <CAHeaderSummary></CAHeaderSummary>
          <CAHeaderWithParagraph HeaderTitle="Here's your estimate with taxes and fees." content = "This might change after we run your credit check."/>
          <CAHeaderWithParagraph HeaderTitle="Decline Equipment Protection" content = "I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences "/>
          <CAHeaderWithParagraph HeaderTitle="Agreements"/>
          <CAHeaderWithParagraph HeaderTitle="Customer Aggrement" content = "I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences I understand that by clicking equipment protection. if any device is lost,stolen,damanged or expreiences." subTitle = "View full agreement" showMinIcon={'true'} showGray={'true'}/>
          <CAHeaderWithParagraph HeaderTitle="Device Payment Agreement"/>
          <CAHeaderWithParagraph HeaderTitle="Notice to Buyer" content = "Notice to buyer: This is a retail installment safe aggrement.Not a lease. Do not accept if it contains blank spaces. You have  a right to a copy of this agreement. Keep it to protect  it contains blank spaces. You have  a right to a copy of this agreement. Keep it to protect" subTitle = "View full agreement" showMinIcon={'true'} showGray={'true'}/>
          <CAHeaderWithParagraph HeaderTitle="Trade-in Agreement"/>
          <CAHeaderWithParagraph HeaderTitle="Customer Agreement" content = "Notice to buyer: This is a retail installment safe aggrement.Not a lease. Do not accept if it contains blank spaces. You have  a right to a copy of this agreement. Keep it to protect  it contains blank spaces. You have  a right to a copy of this agreement. Keep it to protect" subTitle = "View full agreement" showMinIcon={'true'} showGray={'true'}/>
          <CAHeaderWithParagraph HeaderTitle="Payment"/>
          <CAFotterToday/>
          <CAFotterButtons type={['Credit/Debit card','Cash','On my bill']}/>
          <CAFotterButtons type={['Gift card','Check','E - check']}/>
      </div>

  );

}
}
export default Aggrement;
