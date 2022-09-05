const app = require('../app.js');

describe('Palindrom', () => {
    it('should be a palindrom', () => {
        expect(app.isPalindrom('kayak')).toEqual(true);
    });

    it('should NOT be a palindrom', () => {
        expect(app.isPalindrom('azerty')).toEqual(false);
    });

});

describe('Moderator', () => {
    it('contains forbidden words', () => {
        expect(app.constainsForbiddenWords('Vous êtes tous des truffes')).toEqual(true);
    });

    it('removes all forbidden words', () => {
        expect(app.removeForbiddenWords('Vous êtes tous des truffes que je roule dans la confiture'
        )
        ).toEqual('Vous êtes tous des xxx que je roule dans la xxx');
    });

    it('returns the same sentence is no forbidden words detected', () => {
        expect(app.removeForbiddenWords('Vous êtes des anges')).toEqual(
            'Vous êtes des anges'
        );
    });

    it('Detects cases hacks', () => {
        expect(app.removeForbiddenWords('Vous êtes tous des tRuffes')).toEqual('Vous êtes tous des xxx')
    });
    // it.todo('remove forbidden word');

    // it.todo('makes coffee');
});