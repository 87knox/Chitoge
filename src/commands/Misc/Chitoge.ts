import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'chitoge',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}chitoge`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // from assets/images/chitoge-source.png
        const image = this.client.assets.get('chitoge-source')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `🌟 *Chitoge* 🌟\n\n🍀 *Description: Maintained Fork of WhatsApp Botto Void.*\n\n🌐 *URL: https://github.com/ShinNouzen/Chitoge*\n`
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
