<?php
    #REF : https://www.tutorialkart.com/php/php-get-ascii-value-of-a-character/#:~:text=PHP%20%E2%80%93%20Get%20ASCII%20Value%20of,value%20between%200%20and%20255.
    #REF : https://www.tutorialkart.com/php/php-loop-through-characters-in-string/
    class EmailNumberGenerator {
        private static $connection = null;
        
        public static function generateEmailNumber($email, $unixTime){
           $emailNumber = 0;
           preg_match('/(.{4})/', $email, $debutEmail);
			preg_match('/@(.{3})/', $email, $finEmail);
            $length = strlen($debutEmail[0]);
				for ($index = 0; $index < $length; $index++) {
					$emailNumber += ord($debutEmail[0][$index]);
				}
                $length = strlen($finEmail[0]);
				for ($index = 1; $index < $length; $index++) {
					$emailNumber += ord($finEmail[0][$index]);
				}
            
            $emailNumber = $emailNumber + $unixTime;
            return $emailNumber;
        }
    }