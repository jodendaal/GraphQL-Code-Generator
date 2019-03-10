class JqueryQueryCodeGenerator  implements IQueryCodeGeneratorInstance{
    
    code : string  = "JQuery";
    
    constructor(){

    }
    
    GetQueryCode(query : GraphQLQuery,url : string,headers : any) : string {

        var template = "";

        template = `$.ajax({
            url: '${url}',
            type: 'post',
            data: JSON.stringify(${JSON.stringify(query)}),
            headers: ${JSON.stringify(headers) },
            dataType: 'json',
            contentType:"application/json",
            success: function (data) {
                console.log(data);
            },
            error(x,s,t){
                console.log({e:e,x:x,s:s});
            }
        });`;
     
        return template;
    }
}