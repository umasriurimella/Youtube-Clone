export const API_KEY = "AIzaSyDr69ZnMgMm4uBTcGZTkUGd0ndR343g_Sw";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}