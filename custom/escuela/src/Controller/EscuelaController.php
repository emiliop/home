<?php

namespace Drupal\escuela\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class EscuelaController extends ControllerBase {


  public function escuela(){
    
    return [
      '#theme' => 'escuela',
    ];
  }

  

}