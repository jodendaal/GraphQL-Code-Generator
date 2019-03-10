class CSharpTypeCodeGeneratorInstance implements ICodeGeneratorInstance{
    code : string = "C#";
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
                fields += `public ${this.GetType(i)} ${i.name}  {get;set;} \r\n`
            })

             template = `class  ${type.name} { \r\n ${fields} \r\n } \r\n \r\n`;
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
                fields += `${this.GetType(i)} ${i.name}  {get;set;} \r\n`
            })

            template = `interface  ${type.name} { \r\n ${fields} \r\n } \r\n \r\n`;
        }
        

        return template;
    }

    GetTypeActual(type : OfType9) : string {
        switch(type.kind) { 
            case "LIST":
                return this.GetTypeActual(type.ofType.ofType);
            break;
            case "NON_NULL":
                    return this.GetTypeActual(type.ofType);
            break;
            case "String":
               
            break;
        }

        return "";
    }

    

    GetType(field : any):string{

        switch(field.type.kind){
            case  "LIST":
                    if(field.type.ofType.kind == "NON_NULL"){

                        if(field.type.ofType.ofType.name == "ID"){
                                return "string[]"
                        }
                        switch(field.type.ofType.ofType.name)  {
                            case "String":
                                return "string[]";
                            case "Int":
                            return "int[]"
                            case "Float":
                                return "float";
                            break;
                        }

                        return `${field.type.ofType.ofType.name}[]`;
                    }

                    if(field.type.ofType.name == null){
                        return "any[]";
                    }
                return `${field.type.ofType.name}[]`;
              
            case "SCALAR":
                switch(field.type.name)  {
                    case "String":
                        return "string";
                    case "Boolean":
                        return "bool";
                    break;
                    case "Int":
                    case "Long":
                    case "Double":
                    return field.type.name.toLowerCase();
                       break;
                    default:
                    case "ID":
                        return "string";
                    break;
                    return "blank"
                }
                break;
            case "NON_NULL":
                switch( field.type.ofType.name){
                    case "String":
                        return "string";
                        case "Boolean":
                        return "bool";
                    case "LIST":
                            if(field.type.ofType.kind == "NON NULL"){
                                return field.type.ofType.ofType.name;
                            }
                    break;
                    
                }

                switch(field.type.ofType.kind){
                    case "LIST":
                        return field.type.ofType.ofType.ofType.name;
                        break;
                }

                    return  field.type.ofType.name == "ID"?"string":field.type.ofType.name ;
            break;
            case "INPUT_OBJECT":
                    return field.type.name;
            break;
            case "OBJECT":
            return field.type.name;
            break;
           
                
        }
        
        return "blankss";
    }
}