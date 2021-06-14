global with sharing class ObjectNamesUtilitycls extends VisualEditor.DynamicPickList {
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Account', 'Account');
        return defaultValue;
    }

    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DataRow value1 = new VisualEditor.DataRow('red', 'RED');
        VisualEditor.DataRow value2 = new VisualEditor.DataRow('red', 'RED');
        VisualEditor.DynamicPickListRows myValues = new VisualEditor.DynamicPickListRows();

        myValues.addRow(value1);
        myValues.addRow(value2);

        VisualEditor.DynamicPickListRows pickListRows = new VisualEditor.DynamicPickListRows();
        Map<String, Schema.SObjectType> sobjectTypeMap = new Map<String, Schema.SObjectType>();
        sobjectTypeMap = schema.getGlobalDescribe();

        for(String objectname:sobjectTypeMap.keyset()){
            if(sobjectTypeMap.get(objectname).getDescribe().isQueryable() &&
                sobjectTypeMap.get(objectname).getDescribe().fields.getMap().containsKey('name')
            ){
                String objectLabel = sobjectTypeMap.get(objectname).getDescribe().getLabel();
                String objectAPIName = sobjectTypeMap.get(objectname).getDescribe().getName();
                VisualEditor.DataRow objRow = new VisualEditor.DataRow(objectLabel, objectAPIName);
                pickListRows.addRow(objRow);
            }
        }
        return pickListRows;
    }
}
