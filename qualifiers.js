function qualifiers(RCB,SRH)
{
    if(RCB=="win"||SRH=="lose")
    {
        return"csk qualified"
    }
    else
    {
        return"csk not qualified"
    }
}
console.log(qualifiers("win","lose"))