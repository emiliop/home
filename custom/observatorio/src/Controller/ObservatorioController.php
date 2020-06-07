<?php

namespace Drupal\observatorio\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class ObservatorioController extends ControllerBase {


  public function observatorio(){
    
    return [
      '#theme' => 'observatorio',
    ];
  }

  

}