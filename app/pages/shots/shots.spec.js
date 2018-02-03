describe('Shots factory', () => {

    var ShotService;

    beforeEach(angular.mock.module('app.shotsModule'));

    beforeEach(inject((_ShotService_,_$rootScope_) => {
        ShotService = _ShotService_;
        $rootScope = _$rootScope_;
    }));

    it('ShotsService exist', () => {
        expect(ShotService).toBeDefined();
    });

    /*
    promiseFactory
        .getResponse(true)
        .then(function(res) {
          expect(res).toBe('This is totally true');
        });
    */

    describe('.getShots()', () => {
        it('.getShots exist', () => {
            expect(ShotService.getShots()).toBeDefined();
        });
    });

});