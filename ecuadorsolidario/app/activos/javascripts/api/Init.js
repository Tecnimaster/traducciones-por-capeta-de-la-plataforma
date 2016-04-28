var apiMeta =  documento . getElemenById ( " api-huésped " );
m . postgrest . init ( apiMeta . getAttribute ( ' Contenido ' ), {método :  " GET " , url :  " / api_token " });
