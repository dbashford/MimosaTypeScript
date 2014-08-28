/// <reference path="../vendor/require.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />
/// <reference path="../vendor/template.d.ts" />

import $ = require("jquery");
import templates = require("templates");

class ExampleView {

  constructor() {}

  public render(element:string):void {
    templates.render('example', {name: 'Dust', css: 'less'}, function(error, output) {
      $(element).append(output);
      console.error("error")
    });

    templates.render('another-example', {name: 'Dust'}, function(error, output) {
      $(element).append(output);
    });
  }

}

export = ExampleView;




