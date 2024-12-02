package ca.gbc.comp3074.testproject2

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity




class EditActivity : AppCompatActivity() {
    @SuppressLint("MissingInflatedId")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_edit)

        // Get the current value passed from MainActivity
        val editTextField: EditText = findViewById(R.id.editTextField)
        val currentValue = intent.getStringExtra("currentValue")
        editTextField.setText(currentValue) // Pre-fill with current value

        // Save Button
        val saveButton: Button = findViewById(R.id.saveButton)
        saveButton.setOnClickListener {
            // Get the edited value
            val updatedValue = editTextField.text.toString()

            // Return the updated value to MainActivity
            val resultIntent = Intent()
            resultIntent.putExtra("updatedValue", updatedValue)
            setResult(RESULT_OK, resultIntent)
            finish() // Close EditActivity
        }
    }
}
