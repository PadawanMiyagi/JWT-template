'use strict';

import fs from 'fs';
import jwt from 'jsonwebtoken';

class JwtService {

    constructor(){
        // Please generate an RSA 512 bit key and place it in a file or .env
        this.privateKEY = ""
        // Please generate an RSA 512 bit key and place it in a file or .env
        this.publicKEY = ""
    }

    sign(payload, sOptions){
        /*
        sOptions = {
            issuer: "Authorizaxtion/Resource/This server",
            subject: "iam@user.me", 
            audience: "Client_Identity" // this should be provided by client
        }
        */

        // Token signing options
        var signOptions = {
            issuer:  $Options.issuer,
            subject:  $Options.subject,
            audience:  $Options.audience,
            expiresIn:  "30d",    // 30 days validity
            algorithm:  "RS256"    
        };
        return jwt.sign(payload, privateKEY, signOptions);
    }

    verify(token, vOption){
        /*
    vOption = {
        issuer: "Authorization/Resource/This server",
        subject: "iam@user.me", 
        audience: "Client_Identity" // this should be provided by client
    }  
    */
    var verifyOptions = {
        issuer:  $Option.issuer,
        subject:  $Option.subject,
        audience:  $Option.audience,
        expiresIn:  "30d",
        algorithm:  ["RS256"]
    };

        try{
            return jwt.verify(token, publicKEY, verifyOptions);
            }
            catch (err){
                return false;
        }
    }

    decode(){
        return jwt.decode(token, {complete: true});
        //returns null if token is invalid
    }
}