



/*================ADMIN====================*/
/*=                                       =*/
/*=       USER PROFILE SWAGGGER           =*/
/*=                                       =*/
/*=========================================*/




/*==============User Profile Schema=============*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          userProfile:
 *                  type : object
 *                  properties:
 *                       userName:
 *                              type : string
 *                       walletAddress:
 *                              type: string
 *                       Avatar:
 *                              type: string
 *                       background:
 *                              type: string   
 *                       description:
 *                              type: string
 *                       twitter:
 *                              type: string
 *                       facebook:
 *                              type: string
 *                       instagram:   
 *                              type: string
 *                       Collections :
 *                              type : array           
 */










/*==============CREATE USER=============*/

/**
 * @swagger
 * /api/profile:
 *  post:
 *      summary: This Api used to Create a User profile.
 *      description: Run this api to create a User profile.
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/userProfile'
 *      responses:
 *           200:
 *              description: User Created Successfully 

 * */













/*==============UPDATE USER=============*/

/**
 *@swagger
 *  /api/profile:
 *      patch:
 *           summary: Run This Api To Update the user profile
 *           description: If you want to update user so Run This APi to update the User
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/userProfile'
 *           responses:
 *                  200:
 *                     description: user profile udpated successfully
 *                     
 *          
 */








 

/*============== GET SINGLE USER BY WALLET ADDRESS =============*/

/**
 * @swagger
 * /api/profile/{walletAddress}:
 *  get:
 *      summary: Run This API to get Single User 
 *      description: pass walletAddress as prameter and run this api to get single user Exp api/profile/4374874824827492378
 *      parameters:
 *         - in: path
 *           name: walletAddress
 *           required: true
 *           description: add user walletAddress
 *           schema:
 *                 type : string
 *      responses:
 *          200:
 *              description: successfully data fetched
 *              content:
 *                  application/json:
 *                       schema:
 *                          type : array
 *                          items:
 *                              $ref: '#components/schemas/userProfile'                                 
 *                
 */









/*============== DELETE USER =============*/
/**
 *@swagger
 *  /api/profile/:
 *      delete:
 *           summary: Run this api to delete the user
 *           description: pass wallet address in body to delete that user by wallet address
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/userProfile'
 *           responses:
 *                  200:
 *                     description: user deleted successfully
 *                     
 *          
 */








 /*================ADMIN====================*/
/*=                                       =*/
/*=           ADMIN SWAGGGER              =*/
/*=                                       =*/
/*=========================================*/






 

/*==============Admin Register Schema=============*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          adminRegister:
 *                  type : object
 *                  properties:
 *                       walletAddress:
 *                              type : string
 *                       name:
 *                              type: string
 *                       email:
 *                              type: string        
 */








/*==============ADMIN REGISTER=============*/
/**
 * @swagger
 * /api/admin:
 *  post:
 *      summary: This Api used to Create a Admin.
 *      description: pass body and add wallet Address, name, email to create admin
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/adminRegister'
 *      responses:
 *           200:
 *              description: Admin Created Successfully 

 * */







/*==============UPDATE ADMIN=============*/

/**
 *@swagger
 *  /api/admin:
 *      patch:
 *           summary: Run This Api To Update admin
 *           description: In Admin you can only udpate name, email, so run this api to update admin
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/adminRegister'
 *           responses:
 *                  200:
 *                     description: Admin udpated successfully
 *                     
 *          
 */






 /*==============Delete Admin=============*/

/**
 *@swagger
 *  /api/admin:
 *      delete:
 *           summary: Run this api to delete the Admin
 *           description: Pass the walletAddress in body to delete the admin. (delete admin by walletAddress)
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/adminRegister'
 *           responses:
 *                  200:
 *                     description: Admin Deleted Successfully
 *                     
 *          
 */





  /*==============login Admin=============*/

/**
 *@swagger
 *  /api/admin-login:
 *      post:
 *           summary: Get Admin Token
 *           description: Pass wallet address in boy to get Unique token for that Admin
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/adminRegister'
 *           responses:
 *                  200:
 *                     description: token got successfully
 *                     
 *          
 */





 

  /*==============login Admin=============*/

/**
 *@swagger
 *  /api/getSingleAdmin:
 *      get:
 *           summary: Login Admin Using Token
 *           description: Run This Api and pass the token in Headers to get Admin for login
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/userProfile'     
 *          
 */













/*================ADMIN======================*/
/*=                                        =*/
/*=           Create Collection            =*/
/*=                                       =*/
/*=========================================*/




/**
 * @swagger
 *  components:
 *      schemas:
 *          collections:
 *                  type : object
 *                  properties:
 *                       name:
 *                              type : string
 *                       owner:
 *                              type: string
 *                       avatar:
 *                              type: string
 *                       background : 
 *                              type : string
 *                       description:
 *                              type : string
 *                       category:
 *                              type : string     
 *                       
 */









/*==============Create Collection=============*/
  

/**
 *@swagger
 *  /api/collection:
 *      post:
 *           summary: Create colection
 *           description: Run This Api to create Collection
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/collections'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/collections'     
 *          
 */







// ==============Get single collection====================



/**
 *@swagger
 *  /api/collection/{collectionID}:
 *      get:
 *           summary: Get Single Collection By Collection ID
 *           description: Pass the collection ID in Paramereter to get single collection
 *           parameters:
 *              - in : path
 *                name: collectionID
 *                description : add collectionID
 *                schema: 
 *                      type : string
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/collections'     
 *          
 */



 
// ==============Update Collection====================


/**
 *@swagger
 *  /api/collection/{collectionID}:
 *      patch:
 *           summary: Update Collection 
 *           description: Pass the collection ID in paramter to update the current collection.
 *           parameters:
 *              - in : path
 *                name: collectionID
 *                description : add collectionID
 *                schema: 
 *                      type : string
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/collections'
 *           responses:
 *                  200:
 *                     description: collection udpated successfully 
 *          
 */



// ==============Delete Collection====================


/**
 *@swagger
 *  /api/collection/{collectionID}:
 *      delete:
 *           summary: Delete Collection 
 *           description: Pass the collection ID in paramter to Delete the current collection.
 *           parameters:
 *              - in : path
 *                name: collectionID
 *                description : add collectionID
 *                schema: 
 *                      type : string
 *           responses:
 *                  200:
 *                     description: collection Deleted successfully 
 *          
 */











 

/*================ADMIN======================*/
/*=                                         =*/
/*=           Create NFT                    =*/
/*=                                        =*/
/*==========================================*/




/**
 * @swagger
 *  components:
 *      schemas:
 *          nftsModel:
 *                  type : object
 *                  properties:
 *                       tokenAddress:
 *                              type : string
 *                       tokenID:
 *                              type: string
 *                       chainID : 
 *                              type : string
 *                       tokenUri:
 *                              type : string
 *                       Price:
 *                              type : string
 *                       owner : 
 *                              type : string
 *                       NFTImg :
 *                              type : string
 *                       NftTitle:
 *                              type : string
 *                       description:
 *                              type : string
 *                       category:
 *                              type : string
 *                       LikedBy : 
 *                               type : array
 *                       Likes: 
 *                               type: string
 *                       Views: 
 *                               type : string
 *                       isOnSell : 
 *                               type : bolean
 *                               default : false     
 *    
 *                       
 */




// ==============Create NFT==================


/**
 *@swagger
 *  /api/createNft/{ownerID}:
 *      post:
 *           summary: Create Nft
 *           description: Run This APi and pass owner ID in parameter to create nft 
 *           parameters:
 *               - in : path
 *                 name : ownerID
 *                 requried : true
 *                 type : string
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: Nft Created Successfully
 *          
 */





//  ===============get single NFts================



/**
 *@swagger
 *  /api/singleNft:
 *      post:
 *           summary: Get Single NFT by tokken Address and Token ID
 *           description: Run this api and pass the tokenAddress and TokenID in body to get single NFT
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/nftsModel'      
 */









//  ===============Set NFT On Sell================



/**
 *@swagger
 *  /api/nftToSell:
 *      patch:
 *           summary: Set Nfts on Sell
 *           description: Run this API to set NFT on Sell (Pass the tokenAddress in body)
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: Nft Set On Sell   
 */






//  ===============SINGLE USER NFTS THAT NOT ON SALE================





/**
 *@swagger
 *  /api/singleUserNfts:
 *      post:
 *           summary: Get Single User NFt that not on sell
 *           description: Pass onwerID, page and Size to get Nfts that related to single User Exp {"page 1,size 10,owner  6322be5e1102305c3db4bd61"}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/nftsModel'      
 */



 


//  ===============GET SINGLE USER NFTS THAT ARE ON SELL================




/**
 *@swagger
 *  /api/singleUserNftOneSell:
 *      post:
 *           summary: Get Single User's Nfts that are on Sell
 *           description: Pass page, size, and ownerID to get Single User's nfts that are on sell User Exp {"page 1,size 10,owner  6322be5e1102305c3db4bd61"}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/nftsModel'      
 */



 
//  ===============All NFTS THAT CURRENT USER LIKED================




/**
 *@swagger
 *  /api/getAllNftsThatUserLike:
 *      post:
 *           summary: Get all Nfts that liked by one User
 *           description: Pass the wallet Address to get all Liked NFts that liked by that User Exp {"walletAddress 6322be5e1102305c3db4bd61"}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/nftsModel'      
 */



 

// ================Likes NFTS =====================



 
/**
 *@swagger
 *  /api/addlikes:
 *      post:
 *           summary: Run This Api to Like Nfts 
 *           description: To Add Like to sepcific Nfts Pass walletAddress of User and tokenID of Nft Exp {"walletAddress 6322be5e1102305c3db4bd61", "tokenID 08867346372"}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: NFT Liked Successfully  
 */



 



 

// ================Add Follow=====================




/**
 *@swagger
 *  /api/addFollower:
 *      post:
 *           summary: Run This Api to follow user And UnFollow User
 *           description: Run this api to follow any user profile. Add current user walletAddress and profileID of other profile Exp {"walletAddress 6322be5e1102305c3db4bd61", "profileID 08867346372"}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 */



 



// ================Get All NFTS thats are on Sell=====================



/**
 *@swagger
 *  /api/nftsForSell:
 *      post:
 *           summary: APIs to get all Nfts that are on Sell 
 *           description: Run this Api and add Page number and size in body to get all Nfts by pagination EXP {page 1, size 10}
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/nftsModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      type : array
 *                                      items:
 *                                      $ref: '#components/schemas/nftsModel'      
 */

 