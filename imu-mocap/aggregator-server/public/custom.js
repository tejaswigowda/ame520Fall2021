var rigPrefix = "mixamorig";

function calibrate()
{
    var keys = Object.keys(mac2Bones);
    for(var i = 0; i < keys.length; i++){
      mac2Bones[keys[i]].calibration.x = mac2Bones[keys[i]].last.x;
      mac2Bones[keys[i]].calibration.y = mac2Bones[keys[i]].last.y;
      mac2Bones[keys[i]].calibration.z = mac2Bones[keys[i]].last.z;
      mac2Bones[keys[i]].calibration.w = mac2Bones[keys[i]].last.w;
    }
}

function handleWSMessage(obj)
{
   // console.log(obj);
      mac2Bones[obj.id].last.x = obj.x;
      mac2Bones[obj.id].last.y = obj.y;
      mac2Bones[obj.id].last.z = obj.z;
      mac2Bones[obj.id].last.w = obj.w;
      var bone = mac2Bones[obj.id].id;
      var x = model.getObjectByName(rigPrefix + bone);
      x.quaternion.set(obj.x, obj.y, obj.z, obj.w);
}

//  "00:00:00:00:00:02" : {id: "LeftHand", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}},
