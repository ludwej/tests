describe('totalPhoneBill' , function(){
    it('returns the toal phoneBill ' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms') , 'R7.45' );
    });
});
