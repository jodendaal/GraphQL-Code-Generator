

class CodeGenerator
{
    codeGenerators : ICodeGeneratorInstance [];

    constructor(){
        this.codeGenerators = [new CSharpCodeGeneratorInstance(),new TypeScriptCodeGeneratorInstance()]
    }

    public GetQueryCode(query : GraphQLQuery,code  : string) : string {
        var generator = this.codeGenerators.filter(i=> i.code == code)[0];
        return generator.GetQueryCode(query);
    }

    public GetSchema(callback : (content : string) => void,code : string) {
        var generator = this.codeGenerators.filter(i=> i.code == code)[0];
        var schema = new Schema();
        schema.getSchema((result=>{

            var objects = result.data.__schema.types;
            var content = "";

            objects.forEach(i=> {
                    
                content += generator.GetTypeCode(i);
            });


            callback(content);
            

        }));

       
    }
}


class Schema {

    getSchema(schema : (result : RootObject) => void)  : any {

        var query = new GraphQLQuery();
        query.operationName = "IntrospectionQuery";
        query.query = "query IntrospectionQuery { __schema { queryType { name } mutationType { name } subscriptionType { name } types { ...FullType } directives { name description locations args { ...InputValue } } } }        fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } }                fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue }                fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } } } ";
        query.variables = {};
        

        
        this.postAjax("https://graphql.communitygraph.org/graphql/",query,(result)=>{
           
            console.log(JSON.parse(result));
            schema(JSON.parse(result));
            
        });
        
    }

    postAjax(url : any, data :any , success : (result : any) => void) {
        
    
        var xhr = (<any>window).XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open('POST', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        return xhr;
    }
}


interface ICodeGeneratorInstance{
    code : string ;
    GetQueryCode(query : GraphQLQuery) : string;
    GetTypeCode(type : any) : string;
}



class GraphQLQuery
{
    operationName? : string;
    variables? : any;
    query? : string; 
    
     
}




interface QueryType {
    name: string;
}

 interface MutationType {
    name: string;
}

 interface OfType3 {
    kind: string;
    name: string;
    ofType?: any;
}

 interface OfType2 {
    kind: string;
    name?: any;
    ofType: OfType3;
}

 interface OfType {
    kind: string;
    name: string;
    ofType: OfType2;
}

 interface Type2 {
    kind: string;
    name: string;
    ofType: OfType;
}

 interface Arg {
    name: string;
    description: string;
    type: Type2;
    defaultValue: string;
}

 interface OfType6 {
    kind: string;
    name: string;
    ofType?: any;
}

 interface OfType5 {
    kind: string;
    name: string;
    ofType: OfType6;
}

 interface OfType4 {
    kind: string;
    name: string;
    ofType: OfType5;
}

 interface Type3 {
    kind: string;
    name: string;
    ofType: OfType4;
}

 interface Field {
    name: string;
    description: string;
    args: Arg[];
    type: Type3;
    isDeprecated: boolean;
    deprecationReason: string;
}

 interface OfType8 {
    kind: string;
    name: string;
    ofType?: any;
}

 interface OfType7 {
    kind: string;
    name?: any;
    ofType: OfType8;
}

 interface Type4 {
    kind: string;
    name: string;
    ofType: OfType7;
}

 interface InputField {
    name: string;
    description: string;
    type: Type4;
    defaultValue?: any;
}

 interface Interface {
    kind: string;
    name: string;
    ofType?: any;
}

 interface EnumValue {
    name: string;
    description: string;
    isDeprecated: boolean;
    deprecationReason?: any;
}

 interface PossibleType {
    kind: string;
    name: string;
    ofType?: any;
}

 interface Type {
    kind: string;
    name: string;
    description: string;
    fields: Field[];
    inputFields: InputField[];
    interfaces: Interface[];
    enumValues: EnumValue[];
    possibleTypes: PossibleType[];
}

 interface OfType9 {
    kind: string;
    name: string;
    ofType?: any;
}

 interface Type5 {
    kind: string;
    name: string;
    ofType: OfType9;
}

 interface Arg2 {
    name: string;
    description: string;
    type: Type5;
    defaultValue: string;
}

 interface Directive {
    name: string;
    description: string;
    locations: string[];
    args: Arg2[];
}

 interface Schema {
    queryType: QueryType;
    mutationType: MutationType;
    subscriptionType?: any;
    types: Type[];
    directives: Directive[];
}

 interface Data {
    __schema: Schema;
}

 interface RootObject {
    data: Data;
}



