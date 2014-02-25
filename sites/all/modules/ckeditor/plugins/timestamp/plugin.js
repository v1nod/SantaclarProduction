/**
 * Basic sample plugin inserting current date and time into CKEditor editing area.
 */

// Register the plugin with the editor.
// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.plugins.html
CKEDITOR.plugins.add( 'timestamp',
{
    // The plugin initialization logic goes inside this method.
    // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.pluginDefinition.html#init
    init: function( editor )
    {
        // Define an editor command that inserts a timestamp. 
        // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.editor.html#addCommand
        editor.addCommand( 'insertTimestamp',
        {
            // Define a function that will be fired when the command is executed.
            // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.commandDefinition.html#exec
            exec : function( editor )
            {    
                var timestamp = new Date();
                // Insert the timestamp into the document.
                // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.editor.html#insertHtml
                // editor.keystrokeHandler.keystrokes[CKEDITOR.ALT + SHIFT /* A */] = 'insertTimestamp';
                //editor.insertHtml('<br/>');
                add_astha();
                //editor.concat('<br/>');
              
                //editor.insertHtml( 'The current date and time is: <em>' + timestamp.toString() + '</em>' );
                                        
            }
        });
        // Create a toolbar button that executes the plugin command. 
        // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.ui.html#addButton
        editor.ui.addButton( 'timestamp',
        {
            // Toolbar button tooltip.
            label: 'Insert Timestamp',
            // Reference to the plugin command name.
            command: 'insertTimestamp',
            // Button's icon file path.
            icon: this.path + 'images/timestamp.png'
        } );
    }
} );
function add_astha(editor) {
    
    var a = ('#cke_380').eventwhich();
    alert(a);
}
//
//$('document').ready(function() { alert('astha');
//    //var e = jQuery.Event("keydown");
//    var c = ('#cke_380').keypress(function(e){
//        alert(c);
//    });
//    //e.which = 50; // # Some key code value
//    //$("input").trigger(e);
//});
