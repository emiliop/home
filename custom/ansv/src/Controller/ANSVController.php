<?php

namespace Drupal\ansv\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class ANSVController extends ControllerBase {


  public function transparencia(){
    
    return [
      '#theme' => 'transparencia',
    ];
  }

  

}