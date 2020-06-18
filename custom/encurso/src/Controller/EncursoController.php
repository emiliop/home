<?php

namespace Drupal\encurso\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class EncursoController extends ControllerBase {


  public function encurso(){
    
    return [
      '#theme' => 'encurso',
    ];
  }

  

}