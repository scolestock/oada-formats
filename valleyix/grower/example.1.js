'use strict';

module.exports = function(opts) {
  opts = opts || {};

  var _example = {
     UserId:'64E1175E-8744-4C27-856E-00F6D600115D',
     UserName:'auser',
     FirstName:'John',
     LastName: 'Smith',
     EmailAddress:'js@example.com',
     PrimaryPhoneNumber:'1234567890',
     SecondaryPhoneNumber: null,
     bookmarks: { '_id':'abc123', _rev: '6-0qjd2o2fo22' },
  };

  for (var i in opts) {
    if (_example[i]) {
        _example[i] = opts[i]; // override any keys with value in opts:
    }
  }

  return _example;
};
