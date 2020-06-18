<?php

namespace Drupal\transparencia\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class TransparenciaController extends ControllerBase {


  public function transparencia(){
    
    return [
      '#theme' => 'transparencia',
    ];
  }

  

}