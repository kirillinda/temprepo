var _0x15fe=['135833aPEiUJ','width','assets/conversation1.mp3','127lHjegx','assets/enemy.png','inc','1TPyGJY','play','assets/jump.wav','107144UhTcog','assets/death.mp3','length','setVolume','release','draw','update','incY','wav','You\x20found\x20all\x20the\x20rings','Collect\x20rings','check_contact','Good\x20job!','isFound','alive','17306MJOMAP','assets/background.mp3','x_pos','1UXaxCl','Use\x20arrows\x20to\x20control\x20you\x20character','1fzyHwj','pos_y','y_pos','169627WrYOPC','1006uJVxNN','2PrtyHF','currentY','Press\x20R\x20to\x20play\x20again','includes','17jPwmce','Kill\x20enemies\x20if\x20you\x20wish','abs','assets/live.png','assets/gameover.png','currentX','range','size','height','268783cgzKEN','614quhGuO','slice','killed','sign','play_death_sound','push','press','pos_x','log'];var _0x4d7b=function(_0x2a95f1,_0x51f9ce){_0x2a95f1=_0x2a95f1-0x19c;var _0x15fec7=_0x15fe[_0x2a95f1];return _0x15fec7;};(function(_0x347a7a,_0x535977){var _0x5ea501=_0x4d7b;while(!![]){try{var _0x490b24=parseInt(_0x5ea501(0x1d2))*-parseInt(_0x5ea501(0x19e))+-parseInt(_0x5ea501(0x1c3))+parseInt(_0x5ea501(0x1a1))*-parseInt(_0x5ea501(0x19c))+parseInt(_0x5ea501(0x1b0))*parseInt(_0x5ea501(0x1c0))+-parseInt(_0x5ea501(0x1bd))*parseInt(_0x5ea501(0x1b1))+-parseInt(_0x5ea501(0x1ba))*-parseInt(_0x5ea501(0x1a3))+parseInt(_0x5ea501(0x1a7))*parseInt(_0x5ea501(0x1a2));if(_0x490b24===_0x535977)break;else _0x347a7a['push'](_0x347a7a['shift']());}catch(_0x16ad92){_0x347a7a['push'](_0x347a7a['shift']());}}}(_0x15fe,0x2d498));var manual_restart_is_possible,able_to_move=![],gameChar_x,gameChar_y,floorPos_y,scrollPos,gameChar_world_x,lives,indexes,isLeft,isRight,isFalling,isPlummeting,clouds,mountains,collectables,canyons,trees_x,treePos_y,treePos_x,limitation,instances_left,instances_right,restart=!![],score,start_respawn,gameover,enemies,jump_sound,distance_y,distance_x,dead,enemy_killed,enemy_death_sound,background_music,unmet,initial_setup=!![],show_start_screen,music_isPlaying=![],live;function Enemy(_0x485519,_0x369390,_0x3d1dfb){var _0x61d5cb=_0x4d7b;this['x']=_0x485519,this['y']=floorPos_y,this[_0x61d5cb(0x1ad)]=_0x369390,this[_0x61d5cb(0x1ac)]=_0x485519,this['currentY']=floorPos_y,this[_0x61d5cb(0x1bf)]=0x1,this[_0x61d5cb(0x1ca)]=0x0,this[_0x61d5cb(0x1b3)]=![],this[_0x61d5cb(0x1d1)]=_0x3d1dfb,this[_0x61d5cb(0x1b5)]=!![],this[_0x61d5cb(0x1c9)]=function(){var _0x493863=_0x61d5cb;this[_0x493863(0x1ac)]+=this['inc'],this[_0x493863(0x1a4)]+=this[_0x493863(0x1ca)];if(this[_0x493863(0x1ac)]>=this['x']+this[_0x493863(0x1ad)])this['inc']=-0x1;else{if(this['currentX']<this['x'])this['inc']=0x1;}if(this['killed'])this['incY']=0x5;if(this['currentY']>height)this[_0x493863(0x1d1)]=![];if(this[_0x493863(0x1a4)]>floorPos_y){if(this[_0x493863(0x1b5)])enemy_death_sound['play']();this[_0x493863(0x1b5)]=![];}},this['draw']=function(){var _0x4c3e25=_0x61d5cb;this[_0x4c3e25(0x1c9)](),imageMode(CENTER);if(this[_0x4c3e25(0x1d1)])image(enemy_character,this[_0x4c3e25(0x1ac)],this[_0x4c3e25(0x1a4)]-enemy_character[_0x4c3e25(0x1af)]*0.025,enemy_character[_0x4c3e25(0x1bb)]*0.05,enemy_character[_0x4c3e25(0x1af)]*0.05);},this[_0x61d5cb(0x1ce)]=function(_0x381453,_0x257cb6){var _0x2573fd=_0x61d5cb;distance_y=gameChar_y<=floorPos_y-enemy_character[_0x2573fd(0x1af)]*0.05,distance_x=dist(this[_0x2573fd(0x1ac)],floorPos_y,_0x381453,floorPos_y);if(distance_x-0x14<enemy_character[_0x2573fd(0x1bb)]*0.025&&_0x257cb6>floorPos_y-enemy_character['height']*0.05-0x4&&isFalling&&!isPlummeting&&distance_y&&!this['killed'])return this[_0x2573fd(0x1b3)]=!![],isFalling=![],isPlummeting=!![],![];else return!!(distance_x-0x11<enemy_character['width']*0.025&&this[_0x2573fd(0x1d1)]&&!distance_y&&!this['killed']);};}function generate_enemies(){var _0x5d7209=_0x4d7b;for(let _0x333be4=0x0;_0x333be4<random(0xc,0x3c);_0x333be4++)enemies[_0x5d7209(0x1b6)](new Enemy(random(-limitation,limitation),round(random(0x1e,0xc8)),!![]));}function preload(){var _0x290c52=_0x4d7b;soundFormats('mp3',_0x290c52(0x1cb)),enemy_character=loadImage(_0x290c52(0x1be)),gameover=loadImage(_0x290c52(0x1ab)),jump_sound=loadSound(_0x290c52(0x1c2)),enemy_death_sound=loadSound(_0x290c52(0x1bc)),character_death_sound=loadSound(_0x290c52(0x1c4)),background_music=loadSound(_0x290c52(0x1d3)),live=loadImage(_0x290c52(0x1aa)),jump_sound[_0x290c52(0x1c6)](0.1),background_music[_0x290c52(0x1c6)](0.1),character_death_sound[_0x290c52(0x1c6)](0.1),enemy_death_sound[_0x290c52(0x1c6)](0.1);}function respawn(){dead=![],gameChar_x=width/0x2,gameChar_y=floorPos_y-0x64,scrollPos=0x0;}function generate_env_left(){var _0x2b1254=_0x4d7b;for(let _0x203847=0x0;_0x203847<random(0x1,0xa);_0x203847++)trees_x[_0x2b1254(0x1b6)](random(-0x1*scrollPos-0xcd,-0x1*scrollPos-width));for(let _0x590a9c=0x0;_0x590a9c<random(0x3,0xa);_0x590a9c++){cloud={'pos_x':random(-0x1*scrollPos-width,-0x1*scrollPos-width*0x2),'pos_y':random(0x0,floorPos_y-0x12c),'size':random(0.5,0x2)},clouds[_0x2b1254(0x1b6)](cloud);}for(i=0x0;i<random(0x1,0x3);i++){mountain={'x_pos':random(-0x1*scrollPos-width,-0x1*scrollPos-0x2*width),'y_pos':random(0x0,floorPos_y-0x96),'size':random(0x1,0x2)},mountains['push'](mountain);}for(i=0x0;i<random(0x3,0x6);i++){size=random(0x1e,0x3c),collectable={'x_pos':random(-0x1*scrollPos+size,-0x1*scrollPos-(width-size)),'y_pos':random(floorPos_y-size*0.5,floorPos_y-0x96),'size':size,'isFound':![]};if(collectable[_0x2b1254(0x1d4)]>=-limitation+0xc8)collectables[_0x2b1254(0x1b6)](collectable);}for(i=0x0;i<random(0x1,0x3);i++){canyon={'x_pos':random(-0x1*scrollPos-width,-0x1*scrollPos-0x2*width),'width':random(-0x32,0x3c),'y_pos':floorPos_y+0x2e},push_new=!![];for(let _0x35446c=0x0;_0x35446c<canyons['length'];_0x35446c++)if(Math[_0x2b1254(0x1a9)](Math[_0x2b1254(0x1a9)](canyons[_0x35446c][_0x2b1254(0x1d4)])-Math[_0x2b1254(0x1a9)](canyon[_0x2b1254(0x1d4)]))<0x1a4)push_new=![];if(push_new)canyons[_0x2b1254(0x1b6)](canyon);}}function generate_env(){var _0x1e01d6=_0x4d7b;for(i=0x0;i<random(0x1,0xa);i++)trees_x[_0x1e01d6(0x1b6)](random(-0xcd,width));for(i=0x0;i<random(0x3,0xa);i++){cloud={'pos_x':random(-width,0x2*width),'pos_y':random(0x0,floorPos_y-0x12c),'size':random(0.5,0x2)},clouds[_0x1e01d6(0x1b6)](cloud);}for(i=0x0;i<random(0x3,0x5);i++){mountain={'x_pos':random(-width,width*0x2),'y_pos':random(0x0,floorPos_y-0x96),'size':random(0.5,1.5)},mountains[_0x1e01d6(0x1b6)](mountain);}for(i=0x0;i<random(0x3,0x6);i++){size=random(0x1e,0x3c),collectable={'x_pos':random(size-width,0x2*width-size),'y_pos':random(floorPos_y-size*0.5,floorPos_y-0x96),'size':size,'isFound':![]},collectables[_0x1e01d6(0x1b6)](collectable);}for(i=0x0;i<random(0x1,0x5);i++){canyon={'x_pos':random([random(-width,width/0x2-0x168),random(width/0x2+0x64,0x2*width)]),'width':random(-0x32,0x3c),'y_pos':floorPos_y+0x2e};if(canyons[_0x1e01d6(0x1c5)]===0x0)canyons[_0x1e01d6(0x1b6)](canyon);else{if(Math[_0x1e01d6(0x1a9)](canyons[_0x1e01d6(0x1b2)](-0x1)[0x0][_0x1e01d6(0x1d4)]-canyon[_0x1e01d6(0x1d4)])>0x1a4)canyons[_0x1e01d6(0x1b6)](canyon);}}}function generate_env_right(){var _0x2f8c7c=_0x4d7b;for(i=0x0;i<random(0x1,0xa);i++)trees_x['push'](random(-scrollPos+0x384,-scrollPos+width+0x1f4));for(i=0x0;i<random(0x3,0xa);i++){cloud={'pos_x':random(-scrollPos+width,-scrollPos+width*0x2),'pos_y':random(0x0,floorPos_y-0x12c),'size':random(0x1,1.5)},clouds[_0x2f8c7c(0x1b6)](cloud);}for(i=0x0;i<random(0x1,0x2);i++){mountain={'x_pos':random(-scrollPos+width,-scrollPos+width*0x2),'y_pos':random(0x0,floorPos_y-0x96),'size':random(0.5,1.5)},mountains[_0x2f8c7c(0x1b6)](mountain);}for(i=0x0;i<random(0x3,0x6);i++){size=random(0x1e,0x3c),collectable={'x_pos':random(-scrollPos+width+size,-scrollPos+0x2*width-size),'y_pos':random(floorPos_y-size*0.5,floorPos_y-0x96),'size':size,'isFound':![]};if(collectable[_0x2f8c7c(0x1d4)]<=limitation-0x78)collectables[_0x2f8c7c(0x1b6)](collectable);}for(i=0x0;i<random(0x1,0x3);i++){canyon={'x_pos':random(-scrollPos+width,-scrollPos+0x2*width),'width':random(-0x32,0x3c),'y_pos':floorPos_y+0x2e},push_new=!![];for(let _0x1c20a9=0x0;_0x1c20a9<canyons[_0x2f8c7c(0x1c5)];_0x1c20a9++)if(Math['abs'](canyons[_0x1c20a9][_0x2f8c7c(0x1d4)]-canyon[_0x2f8c7c(0x1d4)])<0x1a4)push_new=![];if(push_new)canyons[_0x2f8c7c(0x1b6)](canyon);}}function setup(){preload(),createCanvas(0x400,0x240),floorPos_y=height*0x3/0x4,gameChar_x=width/0x2,gameChar_y=floorPos_y-0x3e8,treePos_y=floorPos_y-0x1b2,clouds=[],mountains=[],collectables=[],canyons=[],trees_x=[],enemies=[],indexes=[],score=0x0,dead=![],enemy_killed=![],start_respawn=![],show_start_screen=!![],scrollPos=0x0,limitation=0x1388,instances_left=0x0,instances_right=0x0,restart&&(lives=0x3,restart=![]),gameChar_world_x=gameChar_x-scrollPos,isLeft=![],isRight=![],isFalling=![],isPlummeting=![],generate_env(),generate_enemies(),start_screen();}function draw(){var _0x315c38=_0x4d7b;background(0x64,0x9b,0xff),noStroke(),fill(0x0,0x9b,0x0),rect(0x0,floorPos_y,width,height/0x4);scrollPos%0x258===0x0&&scrollPos>0x0&&Math['abs'](scrollPos)>instances_left&&(instances_left+=0x258,generate_env_left());scrollPos%0x258===-0x0&&scrollPos<0x0&&Math['abs'](scrollPos)>instances_right&&(instances_right+=0x258,generate_env_right());push(),translate(scrollPos,0x0),drawClouds(),drawMountains(),drawTrees();for(let _0x20ac09=0x0;_0x20ac09<canyons[_0x315c38(0x1c5)];_0x20ac09++)drawCanyon(canyons[_0x20ac09]);for(let _0x56b6e5=0x0;_0x56b6e5<collectables['length'];_0x56b6e5++)drawCollectable(collectables[_0x56b6e5]);for(let _0x31384c=0x0;_0x31384c<enemies['length'];_0x31384c++){enemies[_0x31384c][_0x315c38(0x1c8)](),enemies[_0x31384c]['check_contact'](gameChar_world_x,gameChar_y)&&(isFalling=!![],dead=!![]);}pop(),drawGameChar();for(let _0x1f57c6=0x0;_0x1f57c6<collectables[_0x315c38(0x1c5)];_0x1f57c6++)checkCollectable(collectables[_0x1f57c6]);for(let _0x289b64=0x0;_0x289b64<canyons['length'];_0x289b64++)checkCanyon(canyons[_0x289b64]);if(isFalling){if(gameChar_y>height){lives-=0x1;if(lives>=0x0)character_death_sound['play'](),respawn();else lives<0x0&&(imageMode(CENTER),image(gameover,width/0x2,height/0x2),manual_restart_is_possible=!![],able_to_move=![]);}}Math[_0x315c38(0x1a9)](scrollPos)<limitation?(isLeft&&able_to_move&&(gameChar_x>width*0.2?gameChar_x-=0x5:scrollPos+=0x5),isPlummeting&&(gameChar_y-=0x5),isFalling&&(gameChar_y+=0x5),(gameChar_y===floorPos_y-0x64||dead)&&(isFalling=!![],isPlummeting=![]),gameChar_y===floorPos_y&&(isFalling=![]),isRight&&able_to_move&&(gameChar_x<width*0.8?gameChar_x+=0x5:scrollPos-=0x5)):scrollPos+=-0x14*Math[_0x315c38(0x1b4)](scrollPos);gameChar_world_x=gameChar_x-scrollPos;if(show_start_screen)start_screen();draw_hud();if(score===collectables[_0x315c38(0x1c5)]&&instances_left+instances_right===0x2580)win_screen();}function keyPressed(){var _0xc82a92=_0x4d7b;keyCode===0x27&&able_to_move&&(isRight=!![]),keyCode===0x25&&able_to_move&&(isLeft=!![]),keyCode===0x26&&gameChar_y===floorPos_y&&!isFalling&&able_to_move&&(isPlummeting=!![],jump_sound[_0xc82a92(0x1c1)]()),console[_0xc82a92(0x1b9)](_0xc82a92(0x1b7)+keyCode),console[_0xc82a92(0x1b9)](_0xc82a92(0x1b7)+key);}function keyReleased(){var _0xb6ff79=_0x4d7b;keyCode===0x27&&(isRight=![]);keyCode===0x25&&(isLeft=![]);keyCode===0x52&&manual_restart_is_possible&&(restart=!![],manual_restart_is_possible=![],setup());if(keyCode===0xd&&show_start_screen){initial_setup=![],respawn(),able_to_move=!![];if(!music_isPlaying)background_music[_0xb6ff79(0x1c1)]();music_isPlaying=!![],show_start_screen=![];}console[_0xb6ff79(0x1b9)](_0xb6ff79(0x1c7)+keyCode),console[_0xb6ff79(0x1b9)]('release'+key);}function drawGameChar(){if(isLeft&&isFalling)push(),gameChar_x=-gameChar_x,scale(-0x1,0x1),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0xf),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0xf),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x30),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x31),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0xf,gameChar_x-0x4,gameChar_y-0xf),line(gameChar_x+0x12,gameChar_y-0xf,gameChar_x+0x16,gameChar_y-0xf),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x31,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x30,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x9,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0x10,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),gameChar_x=-gameChar_x,pop();else{if(isRight&&isFalling)push(),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0xf),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0xf),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x30),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x31),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0xf,gameChar_x-0x4,gameChar_y-0xf),line(gameChar_x+0x12,gameChar_y-0xf,gameChar_x+0x16,gameChar_y-0xf),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x31,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x30,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x9,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0x10,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),pop();else{if(isLeft)push(),gameChar_x=-gameChar_x,scale(-0x1,0x1),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0x5),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0x5),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x1c),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x1d),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0x5,gameChar_x-0x4,gameChar_y-0x5),line(gameChar_x+0x12,gameChar_y-0x5,gameChar_x+0x16,gameChar_y-0x5),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x1d,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x1c,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x9,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0x10,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),gameChar_x=-gameChar_x,pop();else{if(isRight)push(),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0x5),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0x5),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x1c),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x1d),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0x5,gameChar_x-0x4,gameChar_y-0x5),line(gameChar_x+0x12,gameChar_y-0x5,gameChar_x+0x16,gameChar_y-0x5),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x1d,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x1c,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x9,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0x10,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),pop();else isFalling||isPlummeting?(push(),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0xf),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0xf),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x30),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x31),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0xf,gameChar_x-0xc,gameChar_y-0xf),line(gameChar_x+0x12,gameChar_y-0xf,gameChar_x+0x16,gameChar_y-0xf),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x31,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x30,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),pop()):(push(),fill(0x41,0x69,0xe1),ellipse(gameChar_x+0x7,gameChar_y-0x3c,0x23,0x19),triangle(gameChar_x+0x3,gameChar_y-0x45,gameChar_x-0x13,gameChar_y-0x4c,gameChar_x-0x2,gameChar_y-0x40),triangle(gameChar_x+0x3,gameChar_y-0x41,gameChar_x-0x18,gameChar_y-0x48,gameChar_x-0x9,gameChar_y-0x3e),triangle(gameChar_x-0x9,gameChar_y-0x3e,gameChar_x-0x18,gameChar_y-0x41,gameChar_x-0x6,gameChar_y-0x37),ellipse(gameChar_x+0x7,gameChar_y-0x23,0x14,0x28),strokeWeight(0x3),stroke(0x41,0x69,0xe1),line(gameChar_x+0x3,gameChar_y-0x15,gameChar_x-0x8,gameChar_y-0x5),line(gameChar_x+0x9,gameChar_y-0x15,gameChar_x+0x12,gameChar_y-0x5),line(gameChar_x+0xe,gameChar_y-0x2a,gameChar_x+0x16,gameChar_y-0x1c),line(gameChar_x-0x1,gameChar_y-0x2a,gameChar_x-0x9,gameChar_y-0x1d),stroke(0xff,0x0,0x0),line(gameChar_x-0x8,gameChar_y-0x5,gameChar_x-0xc,gameChar_y-0x5),line(gameChar_x+0x12,gameChar_y-0x5,gameChar_x+0x16,gameChar_y-0x5),strokeWeight(0.5),fill(0xff,0xeb,0xcd),stroke(0x0,0x0,0x0),ellipse(gameChar_x+0xa,gameChar_y-0x37,0xf,0x9),ellipse(gameChar_x+0x7,gameChar_y-0x23,0xa,0x19),strokeWeight(0x1),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0xd,gameChar_y-0x37),line(gameChar_x+0x6,gameChar_y-0x37,gameChar_x+0x5,gameChar_y-0x38),line(gameChar_x+0xe,gameChar_y-0x38,gameChar_x+0xd,gameChar_y-0x37),fill(0xff,0xff,0xff),strokeWeight(0.5),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x7,0x5),ellipse(gameChar_x-0x9,gameChar_y-0x1d,0x5,0x5),ellipse(gameChar_x+0x16,gameChar_y-0x1c,0x5,0x5),fill(0x0,0x0,0x0),ellipse(gameChar_x+0x7,gameChar_y-0x3f,0x2,0x2),ellipse(gameChar_x+0xe,gameChar_y-0x3f,0x2,0x2),strokeWeight(0x1),pop());}}}}function drawClouds(){var _0x27c178=_0x4d7b;for(i=0x0;i<clouds[_0x27c178(0x1c5)];i++){push(),fill(0xff,0xff,0xff),cloud_scale=clouds[i][_0x27c178(0x1ae)],ellipse(clouds[i][_0x27c178(0x1b8)]+0xc8,clouds[i][_0x27c178(0x19f)]+0x64,0x32*cloud_scale,0x1b*cloud_scale),ellipse(clouds[i][_0x27c178(0x1b8)]+0xb9,clouds[i][_0x27c178(0x19f)]+0x64,0x1b*cloud_scale,0x25*cloud_scale),ellipse(clouds[i][_0x27c178(0x1b8)]+0xaa,clouds[i][_0x27c178(0x19f)]+0x64,0x1b*cloud_scale,0x32*cloud_scale),ellipse(clouds[i]['pos_x']+0x9b,clouds[i]['pos_y']+0x64,0x1b*cloud_scale,0x25*cloud_scale),ellipse(clouds[i]['pos_x']+0x8c,clouds[i][_0x27c178(0x19f)]+0x64,0x32*cloud_scale,0x1b*cloud_scale),pop();}}function drawMountains(){var _0x26e7d5=_0x4d7b;for(i=0x0;i<mountains[_0x26e7d5(0x1c5)];i++){push(),fill(0xb0,0xc4,0xde),mountain_scale=mountains[i][_0x26e7d5(0x1ae)],triangle(mountains[i][_0x26e7d5(0x1d4)]+0x214,0x1b0,mountains[i][_0x26e7d5(0x1d4)]+0x270,0x84*mountain_scale,mountains[i][_0x26e7d5(0x1d4)]+0x362,0x1b0),fill(0xae,0xb3,0xff),triangle(mountains[i][_0x26e7d5(0x1d4)]+0x23f,0x1b0,mountains[i][_0x26e7d5(0x1d4)]+0x2a3,0x46*(mountain_scale*0x2),mountains[i][_0x26e7d5(0x1d4)]+0x362,0x1b0),fill(0xd8,0xbf,0xd8),triangle(mountains[i][_0x26e7d5(0x1d4)]+0x214,0x1b0,mountains[i][_0x26e7d5(0x1d4)]+0x23f,0xc8*mountain_scale,mountains[i]['x_pos']+0x2bc,0x1b0),fill(0xff,0xff,0xff,0x80),pop();}}function drawTrees(){var _0x4088b0=_0x4d7b;for(i=0x0;i<trees_x[_0x4088b0(0x1c5)];i++){treePos_x=trees_x[i],push(),translate(0x0,0x102),stroke(0x0,0x0,0x0),fill(0x55,0x6b,0x2f),beginShape(),vertex(treePos_x+0x96,treePos_y+0x23),vertex(treePos_x+0x82,treePos_y+0x4b),vertex(treePos_x+0x8c,treePos_y+0x4b),vertex(treePos_x+0x6e,treePos_y+0x73),vertex(treePos_x+0x82,treePos_y+0x73),vertex(treePos_x+0x5f,treePos_y+0x9b),vertex(treePos_x+0x8c,treePos_y+0x9b),vertex(treePos_x+0x8c,treePos_y+0xaf),vertex(treePos_x+0xa0,treePos_y+0xaf),vertex(treePos_x+0xa0,treePos_y+0x9b),vertex(treePos_x+0xcd,treePos_y+0x9b),vertex(treePos_x+0xaa,treePos_y+0x73),vertex(treePos_x+0xbe,treePos_y+0x73),vertex(treePos_x+0xa0,treePos_y+0x4b),vertex(treePos_x+0xaa,treePos_y+0x4b),endShape(CLOSE),translate(0x0,-0x102),pop();}}function drawCanyon(_0x3f31b6){var _0x404abb=_0x4d7b;push(),fill(0x0,0x0,0x0),noStroke(),beginShape(),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0x12c+_0x3f31b6[_0x404abb(0x1bb)],_0x3f31b6['y_pos']+0x62),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0xc8,_0x3f31b6['y_pos']+0x62),vertex(_0x3f31b6['x_pos']+0x82,_0x3f31b6[_0x404abb(0x1a0)]+0xe6),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0xaf,_0x3f31b6[_0x404abb(0x1a0)]+0xe6),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0x82,_0x3f31b6['y_pos']+0x140),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0xff+_0x3f31b6['width'],_0x3f31b6[_0x404abb(0x1a0)]+0xc8),vertex(_0x3f31b6[_0x404abb(0x1d4)]+0xc8+_0x3f31b6['width'],_0x3f31b6[_0x404abb(0x1a0)]+0xc8),scale(0x1,0.75),endShape(CLOSE),pop();}function checkCanyon(_0x1a576c){var _0x198368=_0x4d7b;gameChar_world_x>_0x1a576c[_0x198368(0x1d4)]+0xd7&&gameChar_world_x<_0x1a576c[_0x198368(0x1d4)]+0x11d+_0x1a576c[_0x198368(0x1bb)]&&gameChar_y===floorPos_y&&(isFalling=!![]);}function drawCollectable(_0x38a412){var _0xa7864d=_0x4d7b;!_0x38a412[_0xa7864d(0x1d0)]&&(push(),stroke(0xd2,0x69,0x1e),fill(0xf4,0xa4,0x60),ellipse(_0x38a412[_0xa7864d(0x1d4)],_0x38a412[_0xa7864d(0x1a0)],_0x38a412[_0xa7864d(0x1ae)],_0x38a412[_0xa7864d(0x1ae)]),fill(0x64,0x9b,0xff),ellipse(_0x38a412[_0xa7864d(0x1d4)],_0x38a412[_0xa7864d(0x1a0)],_0x38a412[_0xa7864d(0x1ae)]*0.4,_0x38a412[_0xa7864d(0x1ae)]*0.4),pop());}function checkCollectable(_0x458bf6){var _0x326515=_0x4d7b;if(gameChar_world_x>_0x458bf6[_0x326515(0x1d4)]-size/0x2&&gameChar_world_x<_0x458bf6[_0x326515(0x1d4)]+size/0x2&&gameChar_y>_0x458bf6[_0x326515(0x1a0)]-size/0x2&&gameChar_y<_0x458bf6[_0x326515(0x1a0)]+size/0x2+0x41){_0x458bf6[_0x326515(0x1d0)]=!![];}}function start_screen(){var _0x29319e=_0x4d7b;push(),fill(0x0,0x0,0x0),textAlign(CENTER,CENTER),textSize(0x30),text('Sanic\x20XXX',width/0x2,0x64),textSize(0x20),text(_0x29319e(0x19d),width/0x2,height/0x2-0x40-0x2),text(_0x29319e(0x1cd),width/0x2,height/0x2-0x20-0x2),text(_0x29319e(0x1a8),width/0x2,height/0x2-0x2),textSize(0x30),text('PRESS\x20ENTER',width/0x2,height/0x2+0xc8),pop();}function draw_hud(){var _0x1e8fa9=_0x4d7b;score_count(),push(),fill(0x0,0x0,0x0),textSize(0x20),text('Score:\x20'+str(score)+'/'+str(collectables[_0x1e8fa9(0x1c5)]),0x14,0x30),pop(),imageMode(CENTER);for(let _0x1fb434=0x0;_0x1fb434<lives;_0x1fb434++)image(live,0x28+(0xa+live[_0x1e8fa9(0x1bb)]*0.05)*_0x1fb434,0x50,live[_0x1e8fa9(0x1bb)]*0.05,live[_0x1e8fa9(0x1af)]*0.05);}function score_count(){var _0x4e45f2=_0x4d7b;for(let _0x291367=0x0;_0x291367<collectables[_0x4e45f2(0x1c5)];_0x291367++)collectables[_0x291367][_0x4e45f2(0x1d0)]&&!indexes[_0x4e45f2(0x1a6)](_0x291367)&&(score+=0x1,indexes[_0x4e45f2(0x1b6)](_0x291367));}function win_screen(){var _0x3dd86a=_0x4d7b;push(),fill(0x0,0x0,0x0),textAlign(CENTER,CENTER),textSize(0x40),text(_0x3dd86a(0x1cf),width/0x2,height/0x2-0x40-0x2),text(_0x3dd86a(0x1cc),width/0x2,height/0x2+0x2),text(_0x3dd86a(0x1a5),width/0x2,height/0x2+0x40+0x2),pop(),able_to_move=![],manual_restart_is_possible=!![];}