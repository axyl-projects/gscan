/*globals describe, it */
var should = require('should'),
    path = require('path'),
    checker = require('../lib/checker'),
    thisCheck = require('../lib/checks/001-deprecations'),
    utils = require('./utils');

describe('001 Deprecations', function () {
    it('[failure] theme is invalid', function (done) {
        utils.testCheck(thisCheck, '001-deprecations/invalid').then(function (output) {
            output.should.be.a.ValidThemeObject();

            output.results.fail.should.be.an.Object().with.keys(
                'GS001-DEPR-PURL',
                'GS001-DEPR-MD',
                'GS001-DEPR-IMG',
                'GS001-DEPR-COV',
                'GS001-DEPR-AIMG',
                'GS001-DEPR-PIMG',
                'GS001-DEPR-PAIMG',
                'GS001-DEPR-PAC',
                'GS001-DEPR-PTIMG',
                'GS001-DEPR-TSIMG',
                'GS001-DEPR-PPP',
                'GS001-DEPR-C0H',
                'GS001-DEPR-BC',
                'GS001-DEPR-CON-BC',
                'GS001-DEPR-AC',
                'GS001-DEPR-CON-AC',
                'GS001-DEPR-CON-AIMG',
                'GS001-DEPR-CON-PTIMG',
                'GS001-DEPR-CON-TSIMG',
                'GS001-DEPR-CON-IMG',
                'GS001-DEPR-CON-COV',
                'GS001-DEPR-CON-TIMG',
                'GS001-DEPR-TIMG',
                'GS001-DEPR-CSS-AT',
                'GS001-DEPR-CSS-PA',
                'GS001-DEPR-CSS-PATS',
                'GS001-DEPR-GIA',
                'GS001-DEPR-AUTH',
                'GS001-DEPR-AUTH-ID',
                'GS001-DEPR-AUTH-NAME',
                'GS001-DEPR-AUTH-BIO',
                'GS001-DEPR-AUTH-LOC',
                'GS001-DEPR-AUTH-WEB',
                'GS001-DEPR-AUTH-TW',
                'GS001-DEPR-AUTH-FB',
                'GS001-DEPR-AUTH-PROIM',
                'GS001-DEPR-AUTH-COIM',
                'GS001-DEPR-AUTH-URL',
                'GS001-DEPR-AUTH-FIL',
                'GS001-DEPR-AUTH-FORE',
            );

            // pageUrl
            output.results.fail['GS001-DEPR-PURL'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PURL'].failures.length.should.eql(3);

            // meta_description in <head>
            output.results.fail['GS001-DEPR-MD'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-MD'].failures.length.should.eql(1);

            // {{image}}
            output.results.fail['GS001-DEPR-IMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-IMG'].failures.length.should.eql(2);

            // {{cover}}
            output.results.fail['GS001-DEPR-COV'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-COV'].failures.length.should.eql(3);

            // {{author.image}}
            output.results.fail['GS001-DEPR-AIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AIMG'].failures.length.should.eql(2);

            // {{post.image}}
            output.results.fail['GS001-DEPR-PIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PIMG'].failures.length.should.eql(1);

            // {{@blog.cover}}
            output.results.fail['GS001-DEPR-BC'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-BC'].failures.length.should.eql(1);

            // {{author.cover}}
            output.results.fail['GS001-DEPR-AC'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AC'].failures.length.should.eql(2);

            // {{post.author.cover}}
            output.results.fail['GS001-DEPR-PAC'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PAC'].failures.length.should.eql(1);

            // {{post.author.image}}
            output.results.fail['GS001-DEPR-PAIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PAIMG'].failures.length.should.eql(1);

            // {{tag.image}}
            output.results.fail['GS001-DEPR-TIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-TIMG'].failures.length.should.eql(1);

            // {{posts.tags.[4].image}}
            output.results.fail['GS001-DEPR-PTIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PTIMG'].failures.length.should.eql(1);

            // {{tags.[4].image}}
            output.results.fail['GS001-DEPR-TSIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-TSIMG'].failures.length.should.eql(1);

            // {{#if image}}
            output.results.fail['GS001-DEPR-CON-IMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CON-IMG'].failures.length.should.eql(1);

            // {{#if cover}}
            output.results.fail['GS001-DEPR-CON-COV'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CON-COV'].failures.length.should.eql(1);

            // {{#if tag.image}}
            output.results.fail['GS001-DEPR-CON-TIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CON-TIMG'].failures.length.should.eql(1);

            // {{#if tags.[#].image}}
            output.results.fail['GS001-DEPR-CON-TSIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CON-TSIMG'].failures.length.should.eql(1);

            // {{#if post.tags.[#].image}}
            output.results.fail['GS001-DEPR-CON-PTIMG'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CON-PTIMG'].failures.length.should.eql(1);

            // {{@blog.posts_per_page}}
            output.results.fail['GS001-DEPR-PPP'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PPP'].failures.length.should.eql(1);

            // {{content word="0"}}
            output.results.fail['GS001-DEPR-C0H'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-C0H'].failures.length.should.eql(2);

            // css class .page
            output.results.fail['GS001-DEPR-CSS-PA'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CSS-PA'].failures.length.should.eql(2);

            // css class .page-template-{slug}
            output.results.fail['GS001-DEPR-CSS-PATS'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CSS-PATS'].failures.length.should.eql(2);

            // css class .achive-template
            output.results.fail['GS001-DEPR-CSS-AT'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-CSS-AT'].failures.length.should.eql(1);

            // {{#get "posts" include="author"}}
            output.results.fail['GS001-DEPR-GIA'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-GIA'].failures.length.should.eql(1);

            // {{#author}}
            output.results.fail['GS001-DEPR-AUTH'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH'].failures.length.should.eql(1);

            // {{#author.id}}
            output.results.fail['GS001-DEPR-AUTH-ID'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-ID'].failures.length.should.eql(1);            

            // {{#author.name}}
            output.results.fail['GS001-DEPR-AUTH-NAME'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-NAME'].failures.length.should.eql(1);  

            // {{#author.bio}}
            output.results.fail['GS001-DEPR-AUTH-BIO'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-BIO'].failures.length.should.eql(1);

            // {{#author.location}}
            output.results.fail['GS001-DEPR-AUTH-LOC'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-LOC'].failures.length.should.eql(1); 

            // {{#author.website}}
            output.results.fail['GS001-DEPR-AUTH-WEB'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-WEB'].failures.length.should.eql(1);            

            // {{#author.twitter}}
            output.results.fail['GS001-DEPR-AUTH-TW'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-TW'].failures.length.should.eql(1);  

            // {{#author.facebook}}
            output.results.fail['GS001-DEPR-AUTH-FB'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-FB'].failures.length.should.eql(1);

            // {{#author.profile_image}}
            output.results.fail['GS001-DEPR-AUTH-PROIM'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-PROIM'].failures.length.should.eql(1);             

            // {{#author.cover_image}}
            output.results.fail['GS001-DEPR-AUTH-COIM'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-COIM'].failures.length.should.eql(1);
            
            // {{#author.url}}
            output.results.fail['GS001-DEPR-AUTH-URL'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-URL'].failures.length.should.eql(1); 
            
            // filter=author:[...]
            output.results.fail['GS001-DEPR-AUTH-FIL'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-FIL'].failures.length.should.eql(1);  

            // {{#foreach author}}
            output.results.fail['GS001-DEPR-AUTH-FORE'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-AUTH-FORE'].failures.length.should.eql(1);  

            output.results.pass.should.be.an.Object().which.is.empty();

            done();
        }).catch(done);
    });

    it('[success] should show no error if no deprecated helpers used', function (done) {
        utils.testCheck(thisCheck, '001-deprecations/valid').then(function (output) {
            output.should.be.a.ValidThemeObject();

            output.results.fail.should.be.an.Object().which.is.empty();
            output.results.pass.should.be.an.Array().with.lengthOf(26);

            done();
        }).catch(done);
    });

    it('[mixed] should pass and fail when some rules pass and others fail', function (done) {
        utils.testCheck(thisCheck, '001-deprecations/mixed').then(function (output) {
            output.should.be.a.ValidThemeObject();

            output.results.fail.should.be.an.Object().with.keys(
                'GS001-DEPR-PURL',
                'GS001-DEPR-MD',
                'GS001-DEPR-IMG',
                'GS001-DEPR-COV',
                'GS001-DEPR-PIMG',
                'GS001-DEPR-BC',
                'GS001-DEPR-TIMG',
                'GS001-DEPR-C0H'
            );

            output.results.fail['GS001-DEPR-PURL'].should.be.a.ValidFailObject();
            output.results.fail['GS001-DEPR-PURL'].failures.length.should.eql(2);
            output.results.pass.should.be.an.Array().with.lengthOf(18);

            done();
        }).catch(done);
    });
});
