<?php

namespace Drupal\prensa\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class PrensaController extends ControllerBase {


  public function prensa(){
    
    return [
      '#theme' => 'prensa',
    ];
  }

  

}