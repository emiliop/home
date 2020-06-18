<?php

namespace Drupal\funciones\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class FuncionesController extends ControllerBase {


  public function funciones(){
    
    return [
      '#theme' => 'funciones',
    ];
  }

  

}