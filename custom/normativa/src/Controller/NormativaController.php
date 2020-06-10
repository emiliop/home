<?php

namespace Drupal\normativa\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class NormativaController extends ControllerBase {


  public function normativa(){

    $data = [];
    $arr = [];

    $query = \Drupal::entityQuery('node')->condition('type', 'slider_content');
    $nids = $query->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);

    foreach ($nodes as $node) {
          $title = $node->field_slide_h3_title->value;
          $type = $node->title->value;
          $body = $node->body->value;
          $url = file_create_url($node->field_slide_image->entity->uri->value);
          $link = $node->field_slide_link->first()->getUrl()->toString();
          $data = ["date"=> date("d/m/y"),
                  "link"=>$link,
                  "type"=>$type,
                  "text"=>$body,
          ];
          $arr[]=$data; 
      }        
   
    echo json_encode($arr,JSON_UNESCAPED_SLASHES);

    if (file_exists('themes/contrib/bootstrap_sass/js/JSONNormativa.js'))
  {    
        $myfile = fopen('themes/contrib/bootstrap_sass/js/JSONNormativa.js', "w") or die("Unable to open file!");
        $txt = "var normativityDocs = ";
        fwrite($myfile, $txt);
        fwrite($myfile, json_encode($arr,JSON_UNESCAPED_SLASHES));
        fclose($myfile);
        echo 'file found!';
  } 
  else
  {     
        $myfile = fopen('themes/contrib/bootstrap_sass/js/JSONNormativa.js', "w") or die("Unable to open file!");
        $txt = "var normativityDocs = ";
        fwrite($myfile, $txt);
        fwrite($myfile, json_encode($arr,JSON_UNESCAPED_SLASHES));
        fclose($myfile);
        echo 'file NOT found!';
  } 
    
    return [
      '#theme' => 'normativa',
    ];
  }

  

}