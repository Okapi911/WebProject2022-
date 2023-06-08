export default function handler(req, res) {
    const body = req.body

    //print in terminal
    console.log('body: ', body)

    if (!(body.conf && body.id && body.mail && body.pseudo)) {
      // Sends a HTTP error code
      return res.status(400).json({ data: 'L un des champs n est pas rempli' })
    }

    if(body.conf != "true"){
        return res.status(400).json({ data: 'Vous devez confirmez votre compte avec le mail automatique' })
    }

    // Sends a HTTP success code
    res.status(200).json({ data: `${body.id},
    ${body.mail},
    ${body.conf},
    ${body.pseudo}` })
  }
  
