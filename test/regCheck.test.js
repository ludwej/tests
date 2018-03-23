describe('regCheck' , function(){
    it('check registration number' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP') , true );
});
        it('returns false if a registration number is for Bellville ' , function(){
            assert.equal(isFromBellville('DV 23 LP GP', 'MP') , false);
    });
});
