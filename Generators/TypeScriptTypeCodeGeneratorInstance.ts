class TypeScriptTypeCodeGeneratorInstance implements ITypeCodeGeneratorInstance{
    code : string = "TypeScript";
    GetQueryCode(query : GraphQLQuery) : string {


        var json = JSON.stringify(query);

        var template = "";

        template += json;




       return template;
    } 

    GetTypeCode(type : Type) : string{
        var template = "";

        if(type.kind == "OBJECT" || type.kind == "INTERFACE"){
            var fields = "";
            type.fields.forEach(i =>{
                fields += `${i.name} : ${this.GetType(i)};\r\n`
            })

             template = `interface  ${type.name} { \r\n ${fields} \r\n } \r\n \r\n`;
        }

        if(type.kind == "ENUM"){
            var fields = "";
            type.enumValues.forEach(i =>{
                fields += `${i.name} ,\r\n`
            })

            template = `enum  ${type.name} { \r\n ${fields} \r\n } \r\n \r\n`;
        }

        if(type.kind == "INPUT_OBJECT"){
            var fields = "";
            type.inputFields.forEach(i =>{
                fields += `${i.name} ,\r\n`
            })

            template = `interface  ${type.name} { \r\n ${fields} \r\n } \r\n \r\n`;
        }
        

        return template;
    }

    GetType(field : Field):string{

        switch(field.type.kind){
            case  "LIST":
                    if(field.type.ofType.name == null){
                        return "any[]";
                    }
                return `${field.type.ofType.name}[]`;
            case "SCALAR":
                switch(field.type.name)  {
                    case "String":
                        return "string";
                    break;
                    case "Int":
                    case "Long":
                    case "Double":
                        return "number";
                    default:"any"
                }
                
        }
        
        return "any";
    }
}
