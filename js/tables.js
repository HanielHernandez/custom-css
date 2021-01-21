const positions = [
    "fixed", "absolute", "relative", "sticky", "initial", "inherit"
];
const overflows = ['visible', 'hidden', 'clip', 'scroll', 'auto'];
const overflowProperties = ['overflow',"overflow-x",'overflow-y'];
let overflowValues = []
overflowProperties.forEach(prop => {
    const properties = overflows.map(val=>{
        return {
            className: "."+prop+"-"+val,
            property: `${prop}: ${val};`
        };
    })
    overflowValues = [...overflowValues,...properties]
});
const flexProperties = [ 'justify-content','align-items']
const flexValues = [ 'justify-content','align-items']
let flexProValues = [];

for( let val of flexProperties ){
    const values =  flexValues.map(flexVal=>{

    })
}


console.log(overflowValues);
export const tables =
    [
        {
            id: 'positions_table',
            columns: [
                {
                    text: "Class",
                    value: 'className',
                    colClass: 'bold',
                    class: 'bold'
                },
                {
                    text: "Property",
                    value: 'property'
                }
            ],
            values: positions.map(position => {
                return {
                    className: '.' + position,
                    property: 'position: ' + position + ";"
                }
            })
        },
        {
            id:'overflow_table',
            columns: [
                {
                    text: "Class",
                    value: 'className',
                    colClass: 'bold',
                    class: 'bold'
                },
                {
                    text: "Property",
                    value: 'property'
                }
            ],
            values: overflowValues
        },{
            id:"flex_box_utilities_table",
            columns:[],
            values:[]
        }

    ];