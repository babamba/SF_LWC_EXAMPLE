public with sharing class Utilitycls {
    public Utilitycls() {

    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> getRecords(String objName){
        List<sObject> recordsList = new List<SObject>();
        if(objName != '' && objName != null){
            recordsList = database.query('select id, name from '+objName+' order by createddate desc limit 10');
            return recordsList;
        }
        return recordsList;
    }
}
