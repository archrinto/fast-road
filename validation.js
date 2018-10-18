   /* Form Validation ver 1.0 
    * @author : July Arifianto (julyarief@gmail.com)
    */
    class FormValidation {
        constructor(form, rules) {
            if (document.getElementById(form) == null) {
                console.log("ID Form tidak ditemukan")
                return;
            }
            
            if (typeof rules != "object") {
                console.log("Penulisan rules tidak sesuai")
                return;
            } 

            this.form = document.getElementById(form);
            this.rules = rules;
            this.validationError = [];
            this.initialize();
        }

        initialize() {
            this.inputElements = this.form.elements;
            
            var inputName = Object.keys(this.rules);

            for (var i = 0; i < inputName.length; i++) {
                console.log(inputName[i]);
            }
        }

        validate() {
            var inputValid = true;
            var inputName = Object.keys(this.rules);
            var inputElements = this.form.elements;
            for (var i = 0; i < inputName.length; i++) {
                if (typeof inputElements[inputName[i]] != 'undefined') {
                    var rulesName = this.rules[inputName[i]];
                    inputValid = inputValid && this.checkRules(inputName[i], rulesName);
                }
            }
            return inputValid;
        }

        /*
         * Fungsi checkRules
         * Mengecek masing-masing rules dari setiap input
         *
         * @params input, rules
         * @return boolean
         */
        checkRules(input, rules) {
            var inputValid = true;
            var ruleKeys = Object.keys(rules);
            for (var i = 0; i < ruleKeys.length; i++) {
                if (ruleKeys[i] == 'required' && rules[ruleKeys[i]]) {
                    inputValid = inputValid && this.checkRequired(input);
                }
            }
            return inputValid;
        }

        checkRequired(input) {
            if (this.inputElements[input].value == "") {
                this.validationError.push({
                    "input" : this.inputElements[input],
                    "message": input + " tidak boleh kosong"
                });
                return false;
            }
            return true;
        }


        isRequired(input) {

        }

        displayError() {
            this.validationError.forEach(function(e) {
                var err = document.createElement("span");
                var name = e.input.name;
                
                err.classList.add(name + "-val-error");
                err.innerText = e.message;
                e.input.after(err);

                e.input.addEventListener("input", function() {
                    e.
                })
            });
        }
    }
